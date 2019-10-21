import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="dropdơnMenu1">Sắp Xếp</button>
                    <ul className="dropdown-menu" aria-labelledby="dropMenu1">
                        <li>
                            <a role="button" className="sort_selected">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A - Z
                                    </span>
                            </a>
                        </li>
                        <li>
                            <a role="button" className="sort_selecte">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Trạng Thái Kích Hoạt
                                    </span>
                            </a>
                        </li>
                        <li>
                            <a role="button" className="sort_select">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Trạng Thái Ẩn
                                    </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;