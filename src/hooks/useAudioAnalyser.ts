"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

const BANDS = 52;

function makeIdleLevels() {
  return Array.from({ length: BANDS }, () => 0.06 + Math.random() * 0.04);
}

export function useAudioAnalyser(audioRef: RefObject<HTMLAudioElement | null>) {
  const [levels, setLevels] = useState<number[]>(() => makeIdleLevels());
  const ctxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const rafRef = useRef<number>(0);

  const disconnectGraph = useCallback(() => {
    try {
      sourceRef.current?.disconnect();
    } catch {
      // ignore
    }
    sourceRef.current = null;
    try {
      analyserRef.current?.disconnect();
    } catch {
      // ignore
    }
    analyserRef.current = null;
    void ctxRef.current?.close().catch(() => {});
    ctxRef.current = null;
  }, []);

  const tick = useCallback(() => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const buf = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(buf);

    const out: number[] = [];
    const step = Math.max(1, Math.floor(buf.length / BANDS));
    for (let i = 0; i < BANDS; i++) {
      let s = 0;
      for (let j = 0; j < step; j++) s += buf[i * step + j] ?? 0;
      const v = (s / step / 255) * 2.1;
      out.push(Math.min(1, v));
    }

    setLevels(out);
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const start = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;

    const AC = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;

    if (!ctxRef.current) ctxRef.current = new AC();
    const ctx = ctxRef.current;

    if (!analyserRef.current) {
      const a = ctx.createAnalyser();
      a.fftSize = 256;
      a.smoothingTimeConstant = 0.72;
      analyserRef.current = a;
    }

    const analyser = analyserRef.current;

    if (!sourceRef.current) {
      const src = ctx.createMediaElementSource(el);
      src.connect(analyser);
      analyser.connect(ctx.destination);
      sourceRef.current = src;
    }

    void ctx.resume();
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [audioRef, tick]);

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setLevels(makeIdleLevels());
  }, []);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      disconnectGraph();
    };
  }, [disconnectGraph]);

  return { levels, start, stop, disconnectGraph };
}
