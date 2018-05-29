export {Model, LayerType} from "./reimprove/model";
export {Academy, BuildAgentConfig} from "./reimprove/academy";
export {AgentConfig} from "./reimprove/agent";
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

export {setBackend} from "@tensorflow/tfjs";
