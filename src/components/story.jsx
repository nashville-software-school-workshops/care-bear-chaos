export const Story = ({ adjective, weapon, emotion, wrestler, noun }) => {
  return (
    <>
      <div id="story-block">
        <section>
          It was a {adjective ? adjective : "__________"} night in Care-a-Lot
          when Cheer Bear stepped into the ring, wielding a{" "}
          {weapon ? weapon : "__________"}. Across from them stood Grumpy Bear,
          looking incredibly {emotion ? emotion : "__________"}.
        </section>
        <section>
          Just as the match began, {wrestler ? wrestler : "__________"} dropped
          from the sky and landed in the ring! Everyone gasped, but instead of
          fighting, they all sat down and shared a {noun ? noun : "__________"}.
          The crowd went wild.
        </section>
        <section>Classic Care Bear chaos.</section>
      </div>
    </>
  )
}
