
import classNames from "classnames";
function Button({children,variant='default'}){
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center rounded-md m-2" : true,
            "bg-gray-300": variant === 'default',
            "bg-green-700": variant === 'success',
            "bg-yellow-400" :variant === 'warning',
            "bg-red-600" : variant === 'danger'
        })}>
        {children}
        </button>
    )
}

export default Button;