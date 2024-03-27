generate_code_protobufs:
	mkdir -p ./src
	protoc -I=./src/proto ./src/proto/code_exec.proto \
	--js_out=import_style=commonjs:./src/proto/code_exec_proto \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/proto/code_exec_proto \

generate_auth_protobufs:
	mkdir -p ./src
	protoc -I=./src/proto ./src/proto/auth.proto \
	--js_out=import_style=commonjs:./src/proto/auth_proto \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/proto/auth_proto \

generate_kafka_protobufs:
	mkdir -p ./src
	protoc -I=./src/proto ./src/proto/auth.proto \
	--js_out=import_style=commonjs:./src/proto/auth_proto \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/proto/auth_proto \
