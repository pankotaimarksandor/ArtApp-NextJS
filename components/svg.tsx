const icons: {[key: string]: any} = {
    HEART_ICON: {
        content: (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='feather feather-heart'
                viewBox='0 0 24 24'
            >
                <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
            </svg>
        )
    },
}

interface Props {
    name: string,
    className: string
}

const SVG = (props: Props) => {
    const { name } = props
    const icon = icons[name]

    return (
        <div className={props.className}>
            {icon.content}
        </div>
    )
}

export default SVG