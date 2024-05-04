export default function Button({ children, mode = "filled", ...props }) {
  const Icon = props.Icon;
  const style = props.Icon ? "icon-button" : mode + "-button";

  return (
    <>
      <button className={style} {...props}>
        <span>
          {props.Icon && (
            <span className="button-icon">
              <Icon />
            </span>
          )}
          {children}
          <span className="button-icon"></span>
        </span>
      </button>
    </>
  );
}
