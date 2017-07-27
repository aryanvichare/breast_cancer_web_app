import pickle
import numpy as np


def prediction(vector):

  filename = 'Final_model.sav'

  mlp = pickle.load(open(filename,'rb'))
  test = np.array(vector)
  #test1 = np.array()

  result = {2:'benign',4:'malign'}

  pred = int(mlp.predict(test.reshape(1,-1)))
  return result[pred]
