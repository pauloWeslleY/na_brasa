import "./button.sass";

import { ComponentProps } from "react";

const Button = (props: ComponentProps<"button">) => {
  return <button className="button__default" {...props} />;
};

export default Button;
