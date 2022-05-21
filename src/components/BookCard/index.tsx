import React from 'react';
import Container from './styles';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SellIcon from '@mui/icons-material/Sell';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RemoveIcon from '@mui/icons-material/Remove';
import DoneIcon from '@mui/icons-material/Done';
import { Book } from '@prisma/client';

interface IBookCardProps {
    book: Book;
}

const BookCard: React.FC<IBookCardProps> = ({ book }) => {
    const { id, name, coverImageUrl, have, read, price, paidPrice } = book;

    const formatPrice = (p: string) => {
        const p1 = p.slice(0, 2);
        const p2 = p.slice(2, 4);
        return p1 + ',' + p2;
    }

    return (
        <Container>
            <div className='image'>
                <div>
                    <img src={coverImageUrl} />
                </div>
            </div>

            <div className='info'>
                <div className='card-title'>
                    <h3>{name}</h3>
                </div>

                <div className='counters'>
                    <h5><AttachMoneyIcon /> PREÇO: {formatPrice(price)}</h5>
                    <h5>
                        {
                            have ? <><SellIcon /> PAGOU: {formatPrice(paidPrice)}</>
                                : <><CloseIcon className='missing' /> NÃO TEM</>
                        }
                    </h5>
                    <h5>
                        {
                            read ? <><DoneIcon className='done' /> LIDO</>
                                : <><RemoveIcon className='missing' /> NÃO LIDO</>
                        }
                    </h5>
                </div>
            </div>
        </Container >
    );
};

export default BookCard;