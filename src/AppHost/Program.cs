var builder = DistributedApplication.CreateBuilder(args);

var oneAppApi = builder.AddProject<Projects.OneApp>("api");

builder.AddNpmApp("angular", "../OneApp.Web")
    .WithReference(oneAppApi)
    .WaitFor(oneAppApi)
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints()
    .PublishAsDockerFile();

builder.Build().Run();
