export interface IMudraImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  loadingContainerHeight?: string;
  loadingContainerWidth?: string;
  isEnableLoading?: boolean;
  onLoad?: () => void;
}

export interface ContainerProps extends IMudraImageProps {
  isImageLoading?: boolean;
  toggleLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
