import { useState } from 'react';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import { Button } from '../components/Button';

export function Pagination() {
    const [page, setPage] = useState(1);

    const onChangeHandle = (e) => {
        if (!/[a-zA-Z\W+_]/g.test(e.target.value)) {
            setPage(e.target.value);
        }
    }

    const onSubmitHandle = (e) => {
        e.preventDefault();
    }

    return (
        <div className="pagination d-flex justify-content-center">
            <div className="pagination-wrapper d-flex align-items-center justify-evenly">
                <div>
                    <Button className="d-flex align-items-center btn-paging">
                        <ImArrowLeft2/>
                    </Button>
                </div>
                <div className="d-flex align-items-center pagination-track">
                    <span>Page</span>
                    <form className="mx-1" action="/" onSubmit={onSubmitHandle}>
                        <input type="text" name="page-number" id="page-number" value={page} 
                        onChange={onChangeHandle}/>
                    </form>
                    <span>of {1923}</span>
                </div>
                <div>
                    <Button className="d-flex align-items-center btn-paging">
                        <ImArrowRight2/>
                    </Button>
                </div>
            </div>
        </div>
    );
}