import React, { FC } from "react";

import { container, description, input, title } from "./newNoteForm.css";

type Props = {
  title: string;
  description: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

export const NewNoteForm: FC<Props> = (props) => {
  return (
    <div className={container}>
      <h1 className={title}>{props.title}</h1>
      <p className={description}> {props.description}</p>
      <input className={input} type="text" onChange={(e) => props.onChange(e.currentTarget.value)} />
    </div>
  );
};
