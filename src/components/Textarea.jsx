import Warning from "./Warning";

export default function Textarea({ text, onTextChange, warningText }) {
  return (
    <div className="textarea">
      {" "}
      <textarea
        value={text}
        onChange={onTextChange}
        placeholder="Enter your text..."
        spellCheck="false"
      />
      <Warning>{warningText}</Warning>
    </div>
  );
}
