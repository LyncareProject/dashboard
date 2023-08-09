import { Link } from 'react-router-dom';

const Sidebar = ()=>{
    return(
        <div className="Sidebar">
            <div className='LogoWrap'>
                <h2>Logo</h2>
            </div>
            <div className='NavLists'>
                <Link to='/' className='Nav'>
                    <span class="material-icons-sharp">dashboard</span>
                    <h3>홈</h3>
                </Link>
                <Link to='/' className='Nav'>
                    <span class="material-icons-sharp">shopping_cart</span>
                    <h3>주문</h3>
                </Link>
                <Link to='/' className='Nav'>
                    <span class="material-icons-sharp">local_mall</span>
                    <h3>상품</h3>
                </Link>
                <Link to='/' className='Nav'>
                    <span class="material-icons-sharp">person_outline</span>
                    <h3>고객</h3>
                </Link>
                <Link to='/' className='Nav'>
                    <span class="material-icons-sharp">mail_outline</span>
                    <h3>메세지</h3>
                </Link>
                <Link to='/' className='Nav'>
                    <span class="material-icons-sharp">receipt_long</span>
                    <h3>게시판</h3>
                </Link>
                <Link to='/' className='Nav'>
                    <span class="material-icons-sharp">mail_outline</span>
                    <h3>프로모션</h3>
                </Link>
                <Link to='/' className='Nav'>
                    <span class="material-icons-sharp">insights</span>
                    <h3>통계</h3>
                </Link>
                <Link to='/' className='Nav'>
                    <span class="material-icons-sharp">settings</span>
                    <h3>설정</h3>
                </Link>
            </div>
        </div>
    )
}
export default Sidebar