const Prop = (props) => {
    return (
        <>
            {/* <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.roll}</td>
                <td>{props.class}</td>
            </tr> */}

            <table border={1} cellPadding={10} cellSpacing={10} width={500} align='center'>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Roll.no</th>
                    <th>Class</th>
                </tr>
                {
                    props.mokalu.map((com,ind)=>{
                        return(
                            <tr>
                                <td>{ind+1}</td>
                                <td>{com.student_name}</td>
                                <td>{com.roll_no}</td>
                                <td>{com.class}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Prop;