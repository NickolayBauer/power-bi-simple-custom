import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleCard9D3BCDCB5C5446AAA901160F9C8461C2: IVisualPlugin = {
    name: 'circleCard9D3BCDCB5C5446AAA901160F9C8461C2',
    displayName: 'CircleCard',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleCard9D3BCDCB5C5446AAA901160F9C8461C2"] = circleCard9D3BCDCB5C5446AAA901160F9C8461C2;
}

export default circleCard9D3BCDCB5C5446AAA901160F9C8461C2;