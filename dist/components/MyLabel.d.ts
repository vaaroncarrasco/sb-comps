/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Label text
    */
    label: string;
    /**
    * Label text size
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Label text caps
    */
    allCaps?: boolean;
    /**
    * Label color
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Custom label text color
    */
    fontColor?: string;
    /**
    * Label background color
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
