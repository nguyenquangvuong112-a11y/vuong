import { Input, Button } from 'antd';
export const Signup = () =>{
    return(
        <>
            <div>
                <div>
                    <h1>Đăng ký</h1>
                    <Input placeholder="Basic usage" />;
                    <Input placeholder="Basic usage" />;
                    <Button type='default'>Submit</Button>
                </div>
            </div>
        </>
    )
}