export default function handler(req, res) {
    const teams = [
        {
            name: "Cash collector1",
            roles: ["Cash collector"]
        },
        {
            name: "Cash collector2",
            roles: ["Cash collector"]
        },
        {
            name: "Counselor1",
            roles: ["Counselor"]
        },
        {
            name: "Manager1",
            roles: ["Manager"]
        }
    ];

    res.status(200).json(teams);
}
