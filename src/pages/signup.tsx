
import { useMutation } from "@tanstack/react-query"
import { Button, Form, Input } from "antd"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import { useAuthStore } from "../stores/useAuthStore"
import axios from "axios"


const SignUp = () => {
    const { setUser } = useAuthStore()
    const navigate = useNavigate()
    const [form] = Form.useForm()
    const { mutate, isPending } = useMutation({
        mutationFn: async (values: any) => {
            const res = await axios.post(`http://localhost:3000/register`, values)
            return res
        },
        onSuccess: (res) => {
            setUser({
                name: res.data.user.name,
                avatar: res.data.user.avatar || ""
            })
            localStorage.setItem("token", res.data.accessToken)
            toast.success("đăng kí thanh cong")
            navigate("/stories")
            form.resetFields()
        },
        onError: (error: any) => {
            toast.error(error || "dang ki khong than cong")
        }
    })
    const onFinish = (data: any) => {
        mutate(data)
    }
    return (
        <Form onFinish={onFinish} layout="vertical" form={form}>
            <Form.Item label="Name" name="name">
                <Input placeholder="Name"></Input>
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ type: "email", message: "email ddungs dinh dang" }]}>
                <Input placeholder="email"></Input>
            </Form.Item>
            <Form.Item label="Avatar" name="avatar">
                <Input placeholder="avatar"></Input>
            </Form.Item>
            <Form.Item label="Pass" name="password">
                <Input.Password placeholder="password"></Input.Password>
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending}>Dawng ki</Button>
        </Form>
    )
}
export default SignUp
