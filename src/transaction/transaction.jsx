import {useState, useEffect} from 'react';
/**
 * For Container
 * @returns 
 */
const Transaction = (props) => {
    /* -----CONST ------------------------ */
    const TRANSACTION_TITLE = 'Transactions';
    const LIMIT_LASTEST_RECORDS = '10,000';
    /* -----STATES ------------------------ */
    const [records, setRecords] = useState(25);
    const [totalRecords, setTotalRecords] = useState(61389631);
    
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(400);

    useEffect(() => {
        console.log(page);
        console.log(totalRecords);
        console.log(records);
        console.log(totalPage);
    }, [page,totalRecords,records,totalPage]);

    return (
        <>
        {/* --1. TRANSACTION------------------------------*/}
        <div className="transaction container-fluid">
            {/* --1.1. TITLE------------------------------  */}
            <div className="transaction__title_panel">
                    {/* --1.1.1. TITLEBOX ------------- */}
                    <div className="title-box">
                        <h5 className="title">
                            {TRANSACTION_TITLE}
                        </h5>
                        <div className="subtitle">
                            Total {totalRecords} txns (Show {LIMIT_LASTEST_RECORDS} latest records) 
                        </div>
                    </div>
                    
                    {/* --1.1.2. PAGINATIONBOX ------------- */}
                    <div className="pagination-box border">
                        <div className="sub-box desktop-box"></div>
                        <div className="sub-box mobile-box">
                            <div className="info-box">
                                <div>
                                    {records} Records per page
                                </div>
                                <div>
                                    Pages <span className="bold">{page}/{totalPage}</span>
                                </div>
                                <div className="modal-box">
                                    Modal
                                </div>
                            </div>
                            <div className="btn-box">

                            </div>
                        </div>
                    </div>
            </div>
            
            {/* --1.2. TABLE------------------------------  */}
            <div>
                Table
            </div>
        </div>
    
        </>
    );
}

export default Transaction;
