"use client";

import { Container } from "@/components/landing/Container";

const logos = [
  "/landing_page/d4216920-355d-4672-bc75-1f6baf692329.png",
  "/Blogs/7ec71d98-233a-4f2f-91fd-bf4e16740d5e.png",
  "/Blogs/2e949d71-73fb-4c16-8cce-721f8a1a32c4.png",
  "/Blogs/5ccbe5cf-cbea-4028-804d-4b5b2391a8e7.png",
  "/Blogs/79f5ac53-e57f-4611-a982-0b7eae640412.png",
  "/Blogs/f5e94b97-ba42-431a-966b-7708eb461fa7.png",
  "/Blogs/5aa13d33-4ee8-4324-bb67-8bd17f7ec983.png",
  "/Blogs/5c526a59-f539-4776-ac55-04eca396f040.png",
  "/Blogs/fbd161bc-acb3-4f28-a75b-1f6de52b1c07.png",
  "/Blogs/ee117ca1-009b-4412-a550-aa21f38b972b.png",
  "/Blogs/d6ea98db-47de-422d-8886-32151e8dad87.png",
  "/Blogs/746dd5d9-38a7-4480-8277-730131dea287.png",
  "/Blogs/ed50c587-d5bf-4fff-ad3f-105560b484c8.png",
  "/Blogs/4959e153-775c-44f1-a231-2baff1fc07d2.png",
  "/Blogs/8bf91ba8-9f02-4eea-b906-fa1eb88570d7.png",
  "/Blogs/c58a04f6-5ce9-40ef-8888-94f80b7980c2.png",
  "/Blogs/958bb290-5787-4e81-84e6-04152f0fda33.png",
  "/Blogs/9a8b8ebb-d6df-4274-b873-b503092abf70.png",
  "/Blogs/696b9c7d-e5a4-4f82-a94e-10756c73cc20.png",
  "/Blogs/f376afb0-7085-4ac8-97eb-3d0c913b9c2a.png",
  "/Blogs/9f7cf322-d6cd-4c23-a492-9d6a545c0d4f.png",
  "/landing_page/5e0cf09d-4f62-4b01-a9f9-be010ec88818.png",
  "/landing_page/25041f3c-e809-4a40-bd4b-205f772c5589.png",
  "/landing_page/0548a0a0-19ba-4622-b8c1-b4d6c09325a4.png",
  "/landing_page/ed2dc5fa-da49-4625-9ece-3d9ee7060f48.png",
  "/landing_page/37835dab-3753-4f66-85ca-4def763ff7e7.png",
  "/landing_page/25c3beba-d7c2-4617-b749-133d2c4569f8.png",
  "/landing_page/65474c40-beff-40ae-9119-d67222a52d8a.png",
  "/landing_page/7e3a437e-076b-465c-8b79-7abc559d8b18.png",
  "/landing_page/1254ae18-6c87-4657-8907-ec14cca2b9b2.png",
  "/landing_page/908b885c-4738-463d-9ff8-63185678c26e.png",
  "/landing_page/20b98e2c-4b50-4eeb-b23a-9084a9932fc0.png",
  "/landing_page/2b61a205-5dce-43d0-8074-8790bc9e9f74.png",
  "/landing_page/2da38978-5405-42a2-bb98-cc6bbfa7288f.png",
  "/Blogs/d1e7395c-408e-46a9-92fd-a2f52274d690.png",
  "/Blogs/49f8cba7-1475-42ce-89f3-b400a553b8e8.png",
  "/Blogs/c49b700b-17e3-4f44-8860-d230ebb6ba46.png",
  "/Blogs/f76e4b64-8aef-4f7d-9e8a-ce7b7c27006f.png",
  "/Blogs/014c77d9-68d0-4f3c-b38e-71842283dbbb.png",
  "/landing_page/3e5c3a69-49d3-4530-8867-cabaf9eb8614.png",
];

export function SocialProof() {
  return (
    <section className="relative border-y border-white/[0.06] bg-[#050515]/80">
      <Container className="py-8 sm:py-10">
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-10">
          {logos.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="grid place-items-center rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3 backdrop-blur-xl"
            >
              <img
                src={`https://cdn.vocallabs.ai${src}`}
                alt={`Partner logo ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-7 w-full object-contain opacity-75 grayscale saturate-0 transition duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
