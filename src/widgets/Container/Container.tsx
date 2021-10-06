import { IonPage } from '@ionic/react';
import React from 'react';

import './Container.scss';

export interface ContainerProps {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps): JSX.Element => {
    return (
        <IonPage>
            {children}
        </IonPage>
    )
}
