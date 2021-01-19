import Image from 'next/image';

const IMAGE_SIZE = 350;

export default function Index() {
  return (
    <>
      <Image
        src="/me.jpg"
        alt="Avatar of Hanzhi Yin"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        layout="intrinsic"
        className="avatar"
      />
      <article>
        <p>
          Hello! I am Hanzhi Yin.
          Currently, I am acquiring the degree of Bachelor of Science in Computer Science + Music
          in the University of Illinois at Urbana-Champaign.
        </p>
        <p>
          As a classical composer,
          I have a strong passion in exploring musical creativity in the postmodern era.
          I am highly proficient in classical music theory, for both modern and common practice era.
          On top of that, I am highly involved in programming.
          I have experience in front-end development,
          and I remained my craving for machine learning.
        </p>
        <p>
          My greatest interest is to use the most advanced technology to promote musical creativity,
          for professionals and for the majority.
        </p>
        <p>
          Feel free to explore my project list! It enlisted my coding work and also my compositions!
          Lots of projects are still on the way, so stay tuned!
        </p>
      </article>
    </>
  );
}
