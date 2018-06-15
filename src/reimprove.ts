export {Model, LayerType} from "./reimprove/model";
export {Academy, BuildAgentConfig} from "./reimprove/academy";
export {AgentConfig} from "./reimprove/algorithms/AgentConfig";
export {TeachingConfig} from "./reimprove/teacher";

export {
    NeuralNetwork,
    ConvolutionalNeuralNetwork,
    ConvolutionalLayer,
    MaxPooling2DLayer,
    FlattenLayer,
    DenseLayer,
    DropoutLayer
} from './reimprove/networks';

export {QAgent} from "./reimprove/algorithms/q/qagent";
export {QState} from "./reimprove/algorithms/q/qstate";
export {QAction} from "./reimprove/algorithms/q/qaction";
export {QMatrix} from "./reimprove/algorithms/q/qmatrix";
export {QTransition} from "./reimprove/algorithms/q/qtransition";

export {setBackend} from "@tensorflow/tfjs";
