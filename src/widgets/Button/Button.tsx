import { IonButton, IonIcon } from '@ionic/react'
import './Button.scss';

type Props = typeof IonButton.arguments;

export interface ButtonProps extends Props {
    /**
     * Text of button
     */
    children: string;
    /**
     * Variant of the button
     */
    variant?: 'filled' | 'outlined' | 'clear';
    /**
     * Disable the button
     */
    disabled?: boolean;
    /**
     * Icon at the end of the button
     */
    iconEnd?: string;
    /**
     * Icon at the start of the button
     */
    iconStart?: string;
}

export const Button = ({ children, variant, disabled, iconEnd, iconStart, ...rest }: ButtonProps): JSX.Element => {
    console.log(rest)
    return (
        <IonButton disabled={disabled} {...rest}>
            {iconStart && <IonIcon slot="start" icon={iconStart} />}
            {children}
            {iconEnd && <IonIcon slot="end" icon={iconEnd} />}
        </IonButton>
    )
}
