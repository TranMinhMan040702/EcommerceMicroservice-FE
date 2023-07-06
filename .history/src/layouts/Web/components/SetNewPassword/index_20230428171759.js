function SetNewPassword() {
    return (
        <div className="login-register background" style={{ height: '100vh' }}>
            <div className="wapper">
                <header className="d-flex flex-column justify-content-between align-items-center">
                    <h3>Thiết lập mật khẩu</h3>
                    <p style={{ margin: '15px 0 0 0' }}>Tạo mật khẩu mới cho</p>
                    <p style={{ position: 'none', padding: '0', margin: '0', fontSize: '14px' }}>
                        cristran040702@gmail.com
                    </p>
                </header>
                <form>
                    <div className="d-flex mb-3">
                        <input type="password" placeholder="Mật khẩu" name="password" />
                        <button style={{ backgroundColor: 'ffffff' }}></button>
                    </div>
                    <p className="text-center" style={{ color: '#c5c9ca', fontSize: '14px' }}>
                        Đừng tiếc lộ mật khẩu nhé !
                    </p>
                    <button>Tiếp tục</button>
                </form>
            </div>
        </div>
    );
}

export default SetNewPassword;
