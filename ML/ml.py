import pandas as pd
import numpy as np
import pickle

df = pd.read_csv("Combine.csv")

df.isnull().mean()*100

df.dropna()

df =df[~df.isin([np.nan, np.inf, -np.inf]).any(1)]

df.isnull().sum()

df = df[["No. of Bedrooms","Area","Price"]]

df.head

X = df[[ 'No. of Bedrooms', 'Area']]

y = df['Price']

y = y.astype('int')
X = X.astype('int')

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2,random_state=101)

from sklearn.linear_model import LinearRegression
lr = LinearRegression()
lr.fit(X_train,y_train)


pickle.dump(lr,open('model.pkl','wb'))