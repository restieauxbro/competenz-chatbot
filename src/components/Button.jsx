import { PopupButton } from "@typeform/embed-react";

export default Button = (props) => {
  const PopUpProps = () => {
    const rest = props;
    delete rest.button_classes;
    delete rest.button_text;
    return rest;
  };
  return (
    <PopupButton {...PopUpProps()} className={props.button_classes}>
      {props.button_text}
    </PopupButton>
  );
};
