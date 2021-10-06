import { IonIcon } from '@ionic/react';
import { motion } from 'framer-motion';
import { ellipsisHorizontalOutline } from 'ionicons/icons';
import './Card.scss';

interface CardProps {
    digits: string;
    name: string;
    amount: string;
    onClick: () => void;
}

export const Card = ({ digits, name, amount, onClick }: CardProps): JSX.Element => {

    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragMomentum={false}
            dragTransition={{ bounceStiffness: 1000, bounceDamping: 10 }}
            className="card">
            <div className="card__header">
                <div className="card__amount">
                    <div className="card__amount--value">₹{amount}</div>
                    <div className="card__amount--placeholder">Balance</div>
                </div>
                <IonIcon size="large" icon={ellipsisHorizontalOutline} />
            </div>
            <div className="card__number">
                <span className="card__number--mask">
                    **** **** ****
                </span>
                <span className="card__number--unmasked">
                    {digits}
                </span>
            </div>
        </motion.div>
    )
}

