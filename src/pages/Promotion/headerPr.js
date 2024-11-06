import { useContext, useState } from "react";
import { PromotionalContext } from "../../context/promocontext";

export default function HeaderPr() {
  const { setPromoMessage, setPromoLink } = useContext(PromotionalContext);
  const [input, setInput] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPromoMessage(input);
    setPromoLink(link);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new promo message"
      />
      <input
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Enter new link"
      />
      <button type="submit">Update Promo</button>
    </form>
  );
}
