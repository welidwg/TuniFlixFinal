export default function ListContainer(props) {
    return (
        <div className="d-flex flex-column list-container mx-auto my-auto">
            {props.children}
        </div>
    );
}
