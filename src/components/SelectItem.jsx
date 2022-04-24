export default function SelectItem({ items }) {
    return (
        items.map((item) => 
            <option key={item.name}>{item.name}</option>
        )
    )
}