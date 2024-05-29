export const LoginView=() =>
{
return(
    <form>
        <label>
            Username:
            <input type="text" />
            Password:
            <input type="password" />
        </label>
        <button type="submit">Submit</button>
    </form>
   )
}