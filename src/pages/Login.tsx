/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues} from "react-hook-form";
import { useLoginMutation } from "../redux/featurs/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/featurs/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../component/Form/PHForm";
import PHInput from "../component/Form/PHInput";



const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    // const {register, handleSubmit} = useForm()

    const [login] = useLoginMutation()


    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading('Logging in');
    
        try {
            const userInfo = {
                id: data.id,
                password: data.password
            };
    
            console.log(userInfo);
            const res = await login(userInfo).unwrap();
    
            const decodedUser = verifyToken(res.data.accessToken) as any; // API might return different key names
            const user: TUser = {
                userId: decodedUser.userId,
                role: decodedUser.userRole, // ✅ Ensures 'role' is correctly set
                iat: decodedUser.iat,
                exp: decodedUser.exp,
            };
    
            console.log(user);
            dispatch(setUser({ user, token: res.data.accessToken }));
    
            toast.success('Logged in', { id: toastId, duration: 2000 });
            navigate(`/${user.role}/dashboard`); //
            // navigate('/')
    
        } catch (error) {
            toast.error("Something went wrong", { id: toastId, duration: 2000 });
        }
    };
    


    return (
        <>
            <h1 className="">login now</h1>
            <Row justify='center' align='middle' style={{ height: '100vh' }}>
                <PHForm onSubmit={onSubmit}>
                    <div>
                        {/* <label htmlFor="id">ID: </label> */}
                        {/* <input type="text" id="id" {...register('id')} /> */}
                        <PHInput type='text' name='id' label='ID'></PHInput>
                    </div>
                    <div>
                        {/* <label htmlFor="id">Pass: </label> */}
                        {/* <input type="text" id="id" {...register('password')} /> */}
                        <PHInput type='text' name='password' label='Password'></PHInput>
                    </div>
                    <Button htmlType="submit">Login</Button>
                </PHForm>
            </Row>
        </>
    );
};

export default Login;