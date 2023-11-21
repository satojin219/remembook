import { button, inputContainer } from "./newBook.css";

export default function NewBook() {
  return (
    <main>
      <div>
        <div className={inputContainer}>
          <label htmlFor="">タイトル</label>
          <input type="text" />
        </div>
        <div className={inputContainer}>
          <label htmlFor="">著者</label>
          <input type="text" />
        </div>
        <div className={inputContainer}>
          <label htmlFor="">画像</label>
          <input type="image" />
        </div>
        <button className={button}>登録する</button>
      </div>
    </main>
  );
}
