ReImproveJS Changelog
========================

Version 0.0.2
----------------------
Improved the way models are created, by implementing a solution between TensorFlowJS and the user, giving 
interfaces to allow easier creation. Also, added support for Convolutional Neural Networks and for model loading
from Keras or TensorFlow models.
* Added Neural Networks, a class which permits to create a neural network. This class corresponds to
the pre-creation of the model, only giving each layer its configuration. 
* Add layers to your neural network (dense, dropout, flatten)
    * Added Convolutional Neural Network, an extension of the Neural Networks which permits to add 
    convolutional layers (conv2d, maxpool2d).
    * In the Convolutional Neural Network, the structure is managed automatically (conv layers => dense layers), you
    just have to set the content of each part.
    * __Convolutional Networks are not ready for use for now__


Version 0.0.1
----------------------
This version corresponds to the minimal to have a working library.
* Create an academy, agents, teachers
* Associate teachers and agents
* Give an agent a neural network model
* Neural Network is managed by TensorFlowJS
* Implemented Q-Learning algorithm and here DQN
* Reward your agents
* Possibility to dynamically manage the learning sequence
* Parameters to create to learning sessions
* Possibility to visualize training sequence parameters by providing a debug output