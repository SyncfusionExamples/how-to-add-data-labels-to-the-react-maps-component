import { MapsComponent, LayersDirective, LayerDirective,Inject, DataLabel, ILabelRenderingEventArgs} from '@syncfusion/ej2-react-maps';
import { world_map } from './world_map'

import './App.css';
let uncountries: object[] = [
  { Name: "United States", SeverityLevel: "High"},
  { Name: "India", SeverityLevel: "High" },
  { Name: "Brazil", SeverityLevel: "High"},
  { Name: "United Kingdom", SeverityLevel: "High"},
  { Name: "Russia", SeverityLevel: "High"},
  { Name: "Turkey", SeverityLevel: "High"},
  { Name: "France", SeverityLevel: "High"},
  { Name: "Iran", SeverityLevel: "Moderate"},
  { Name: "Spain", SeverityLevel: "Moderate"},
  { Name: "Italy", SeverityLevel: "Moderate"},
  { Name: "Argentina", SeverityLevel: "Moderate"},
  { Name: "Colombia", SeverityLevel: "Moderate"},
  { Name: "Indonesia", SeverityLevel: "Low"},
  { Name: "Poland", SeverityLevel: "Low"},
  { Name: "Mexico", SeverityLevel: "Low"},
  { Name: "Ukraine", SeverityLevel: "Low"},
  { Name: "South Africa", SeverityLevel: "Low"},
  { Name: "Netherlands", SeverityLevel: "Low"}
];

function App() {
  const dataLabel = (args: ILabelRenderingEventArgs): void => {
    if(args.maps != null) {
      let dataSource: any = args.maps.layers[0].dataSource;
      for (var i = 0; i < dataSource.length; i++) {
        if (dataSource[i]['Name'] === args.text && dataSource[i]['SeverityLevel'] === "High") {
          args.template = '<div> ${SeverityLevel} </div>';
          break;
        } else {
          args.template = '<div></div>';
        }
      }
    }
  };
  return (
    <div className="App">
    <MapsComponent titleSettings={ { text: 'Covid-19 Affected Countries' } } dataLabelRendering={dataLabel}>
    <Inject services={[DataLabel]} />
      <LayersDirective>
        <LayerDirective shapeData={world_map} dataSource={uncountries}
        shapeDataPath='Name' shapePropertyPath='name' 
        dataLabelSettings={
          {visible: true,
           //smartLabelMode: 'Hide',
           //intersectionAction: 'Trim',
        //    textStyle: {
        //     color:'blue',
        //     size: '10px',
        //     fontStyle: 'Sans-serif',
        //     fontWeight: 'bold'  
        // }
        

      }}
        shapeSettings={ {
          colorValuePath: 'SeverityLevel',
            colorMapping: [
            { value: 'High', color: '#A69d70'},
            { value: 'Moderate', color: '#A4D6AD'},
            { value: 'Low', color: '#DEEBAE'},
          ],
        fill: '#E5E5E5'
      } }
      >
        </LayerDirective>
      </LayersDirective>
      </MapsComponent>
    </div>
  );
}

export default App;
