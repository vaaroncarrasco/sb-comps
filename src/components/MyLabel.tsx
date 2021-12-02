import './mylabel.css';

export interface MyLabelProps {
  /**
  * Label text
  */
  label: string;
  /**
  * Label text size
  */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
  * Label text caps
  */
  allCaps?: boolean;
  /**
  * Label color
  */
  color?: 'primary'|'secondary'|'tertiary';
  /**
  * Custom label text color
  */
  fontColor?: string;
  /**
  * Label background color
  */
   backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color   = 'primary',
  label   = 'No Label',
  size    = 'normal',
  fontColor,
  backgroundColor = 'transparent'

}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
