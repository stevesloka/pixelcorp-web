## WebApp

### ConfigMap

kubectl create configmap abstractions-speakers --from-file=src/app/assets/data/speakers.json

$ kubectl get configmaps abstractions-speakers -o yaml
