import { Input, Button } from 'antd';
export const Signin = () =>{
    return(
        <>
            <div>
                <div>
                    <h1>Đăng nhập</h1>
                    <Input placeholder="Basic usage" />;
                    <Input placeholder="Basic usage" />;
                    <Button type='default'>Submit</Button>
                </div>
            </div>
        </>
    )
}