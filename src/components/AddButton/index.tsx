const AddButton = (submit: any) => {
    return (
        <>
            <input type="button" value="追加" onSubmit={() => console.log("a")} />
        </>
    )
}

export default AddButton;