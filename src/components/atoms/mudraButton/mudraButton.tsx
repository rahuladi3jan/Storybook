import * as React from "react";
import { IconAlignment, Size, State, Variant, Width } from "./propTypes";
import * as ClassNameConfig from "./classNameConfig";
import "./styles.scss";
import { IconType } from "../../../icons";
export interface IMudraButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variant;
  size?: Size;
  width?: Width;
  iconAlignment?: IconAlignment;
  state?: State;
  label?: string;
  icon?: IconType;
}

const MudraButton: React.FunctionComponent<IMudraButtonProps> = (
  props
): React.ReactElement => {
  const {
    variant,
    size,
    width,
    iconAlignment,
    state,
    label,
    icon: Icon,
    className,
    ...restProps
  } = props;

  const computedClassName: string = React.useMemo<string>(() => {
    const classes: string[] = className
      ? [className, "mudra-button"]
      : ["mudra-button"];
    classes.push(
      ClassNameConfig.VariantConfig[variant ?? Variant.Primary],
      ClassNameConfig.SizeConfig[size ?? Size.Medium],
      ClassNameConfig.WidthConfig[width ?? Width.Auto],
      ClassNameConfig.IconAlignmentConfig[
        iconAlignment ?? IconAlignment.LeftAligned
      ],
      ClassNameConfig.StateConfig[state ?? State.Enabled]
    );
    return classes.join(" ");
  }, [variant, size, width, iconAlignment, state]);

  const isLabelVisible: boolean = React.useMemo(() => {
    return !(
      iconAlignment === IconAlignment.Single ||
      width === Width.Circle ||
      width === Width.Square
    );
  }, [iconAlignment, width]);

  const isIconVisible: boolean = React.useMemo(() => {
    return iconAlignment !== IconAlignment.None;
  }, [iconAlignment]);

  return (
    <button
      {...{
        ...restProps,
        className: computedClassName,
        disabled: state == State.Disabled ? true : false,
      }}
    >
      {isLabelVisible && label}
      {isIconVisible && Icon && <Icon className="icon" />}
    </button>
  );
};

MudraButton.defaultProps = {
  variant: Variant.Primary,
  size: Size.Medium,
  width: Width.Auto,
  iconAlignment: IconAlignment.None,
  state: State.Enabled,
};

export default MudraButton;
