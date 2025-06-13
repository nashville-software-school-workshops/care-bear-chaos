export const Inputs = ({
  setAdjective,
  setWeapon,
  setEmotion,
  setWrestler,
  setNoun,
}) => {
  return (
    <div id="input-block">
      <label>
        Adjective:{" "}
        <input
          id="adjective"
          type="text"
          onChange={(e) => {
            setAdjective(e.target.value)
          }}
        />
      </label>
      <label>
        Weapon:{" "}
        <input
          id="weapon"
          type="text"
          onChange={(e) => {
            setWeapon(e.target.value)
          }}
        />
      </label>
      <label>
        Emotion:{" "}
        <input
          id="emotion"
          type="text"
          onChange={(e) => {
            setEmotion(e.target.value)
          }}
        />
      </label>
      <label>
        Wrestler:{" "}
        <input
          id="wrestler"
          type="text"
          onChange={(e) => {
            setWrestler(e.target.value)
          }}
        />
      </label>
      <label>
        Noun:{" "}
        <input
          id="noun"
          type="text"
          onChange={(e) => {
            setNoun(e.target.value)
          }}
        />
      </label>
    </div>
  )
}
