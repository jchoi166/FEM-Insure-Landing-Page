import * as logic from "./js/logic"
import "./sass/main.scss"
require.context("./images/", true, /\.(png|svg|jpg|gif)$/);

logic.populateCardContainer()