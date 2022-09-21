import { PopupButton } from "@typeform/embed-react";

export default Button = (props) => {
  return (
    <PopupButton {...props} className={props.button_classes}>
      {props.button_text}
    </PopupButton>
  );
};
