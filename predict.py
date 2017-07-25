import pickle
import numpy as np

filename = 'Final_model.sav'

mlp = pickle.load(open(filename,'rb'))

test = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 3.0, 1.0, 1.0]
test = np.array(test)

result = {2:'benign',4:'malign'}

pred = int(mlp.predict(test.reshape(1,-1)))

print(result[pred])
