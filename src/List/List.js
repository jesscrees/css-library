import BoxShadow from "../Components/BoxShadow/BoxShadow";
import "./List.css";

function List({ searchText }) {
  const data = [
    {
      id: "boxShadow",
      keywords: ["example", "test"],
      propertiesUsed: ["box-shadow"],
      selectorsUsed: [],
    },
  ];
  return (
    <div className="List">
      {data
        .filter((component) => {
          let keywordFound = false;
          let propertyFound = false;
          let selectorFound = false;

          component.keywords.map((keyword) => {
            if (keyword.includes(searchText)) {
              keywordFound = true;
            }
            return null;
          });
          component.propertiesUsed.map((property) => {
            if (property.includes(searchText)) {
              propertyFound = true;
            }
            return null;
          });
          component.selectorsUsed.map((selector) => {
            if (selector.includes(searchText)) {
              selectorFound = true;
            }
            return null;
          });

          if (keywordFound || propertyFound || selectorFound) {
            return true;
          } else {
            return false;
          }
        })
        .map((filteredData) => (
          <div key={filteredData.id}>
            {filteredData.id === "boxShadow" && <BoxShadow />}
          </div>
        ))}
    </div>
  );
}

export default List;
