// Question-5

function estimateDelivery(package) {
    switch (package) {
        case "standard":
            console.log("might take 3-4 days");
            break;
        case "express":
            console.log("1-2 days");
            break;
        case "overnight":
            console.log("would be delivered the next day");
            break;
        default:
            console.log("none");
    }
    return -1;
}
estimateDelivery("standard");