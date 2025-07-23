const responseFormatter = (res) => {
    let temp = res.substring(7, res.lastIndexOf("```"))
    return temp;

};

export default responseFormatter;
